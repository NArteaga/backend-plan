"use strict";

const { getQuery } = require("../../lib/util");
const Repository = require("../Repository");

module.exports = function RFSolicitudRepository(models, Sequelize) {
  const { RFSolicitud, entidad } = models;
  const Op = Sequelize.Op;
  const attributes = [
    "id",
    "nombre",
    "departamento",
    "fechaSolicitud",
    "estado",
  ];

  async function findOrCreate(data) {
    let respuesta;
    const query = {
      where: { nombre: data.nombre },
    };
    respuesta = await RFSolicitud.findOne(query);
    if (!respuesta) {
      respuesta = await RFSolicitud.create(data);
    }
    return respuesta;
  }

  function cantidadSolitudesPorEntidadDepartamento(params = {}) {
    return RFSolicitud.findAll({
      attributes: [
        "estado",
        [Sequelize.fn("COUNT", "estado"), "cantidad"],
      ],
      group: ["estado"]
    });
  }

  // Check if it's entidad
  function findAll(params = {}) {
    const query = getQuery(params);
    query.attributes = attributes;

    query.where = {};

    if (params.notInEstado) {
      query.where.estado = { [Op.notIn]: params.notInEstado };
    }
    if (params.estado) {
      query.where.estado = params.estado;
    }
    if (params.departamento) {
      query.where.departamento = params.departamento;
    }
    if (params.nombre) {
      query.where.nombre = {
        [Op.iLike]: `%${params.nombre}%`,
      };
    }
    query.include = [
      {
        model: entidad,
        as: "entidad",
      },
    ];
    // Filter by entity passed by Controller
    if (params.entity) {
      query.where.entidadId = params.entity;
    }
    return RFSolicitud.findAndCountAll(query);
  }

  return {
    findAll,
    findOrCreate,
    cantidadSolitudesPorEntidadDepartamento,
    findOne: (params) => Repository.findOne(params, RFSolicitud, attributes),
    findById: (id) => Repository.findById(id, RFSolicitud, attributes),
    createOrUpdate: (item, t) =>
      Repository.createOrUpdate(item, RFSolicitud, t),
    deleteItemCond: (params, t) =>
      Repository.deleteItemCond(params, RFSolicitud, t),
  };
};
