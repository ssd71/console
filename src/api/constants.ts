const API_V1 = 'api/v1';

export const HEALTH_LIVENESS_URL = `${API_V1}/liveness`;
export const LOG_STREAM_LIST_URL = `${API_V1}/logstream`;
export const LOG_STREAMS_SCHEMA_URL = (streamName: string) => `${LOG_STREAM_LIST_URL}/${streamName}/schema`;
export const LOG_QUERY_URL = `${API_V1}/query`;
