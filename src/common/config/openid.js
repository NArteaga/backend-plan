'use strict';

const openid = {
  // issuer server openid connect
  issuer : 'https://account-idetest.agetic.gob.bo',
  // response registry client
  client : {
    application_type : 'web',
    grant_types      : [
      'authorization_code'
    ],
    id_token_signed_response_alg : 'RS256',
    require_auth_time            : false,
    response_types               : [
      'code'
    ],
    subject_type                      : 'public',
    token_endpoint_auth_method        : 'client_secret_basic',
    introspection_signed_response_alg : 'RS256',
    post_logout_redirect_uris         : [
      'http://localhost:8080/oauth/logout.html'
    ],
    backchannel_logout_session_required  : false,
    frontchannel_logout_session_required : false,
    authorization_signed_response_alg    : 'RS256',
    web_message_uris                     : [],
    client_id_issued_at                  : 1577742983,
    client_id                            : '7a096b2e-edb1-42d5-92ce-b1a9455873f2',
    client_name                          : 'frontend_base_vue',
    client_secret_expires_at             : 0,
    client_secret                        : '6RHumL3QbbuUzfaX1jrSsn2oMSldbCIcwpFeTukU7sunDwzNnsFLYL3ei2YSB7CE',
    contacts                             : [
      'dbarra@agetic.gob.bo'
    ],
    redirect_uris: [
      'http://localhost:8080/oauth/login.html'
    ],
    introspection_endpoint_auth_method : 'client_secret_basic',
    revocation_endpoint_auth_method    : 'client_secret_basic',
    registration_client_uri            : 'https://account-idetest.agetic.gob.bo/reg/7a096b2e-edb1-42d5-92ce-b1a9455873f2',
    registration_access_token          : 'V6JE7_ZPuMdsWsLYYMe1VKm5Z_GTZpc~KeVKCvruPqZ'
  },
  // parameters registry client
  client_params: {
    scope: ['openid nombre email documento_identidad fecha_nacimiento celular']
    // prompt: 'consent',
  }
};

module.exports = openid;
