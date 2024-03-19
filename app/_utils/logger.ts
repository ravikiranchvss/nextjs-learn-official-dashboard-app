import pino from 'pino-http'

export const logging = () => {
    const logger = pino();

    logger.logger.info('infoooooo loggg this is')
    logger.logger.error('error loggg this is')

    console.info('console info this is')
    console.info('console error this is')
}