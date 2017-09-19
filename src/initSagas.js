import * as sagas from '../src/sagas'


export const initSagas = (sagasMiddleware) => {
    Object.values(sagas).forEach(sagasMiddleware.run.bind(sagasMiddleware))
}
