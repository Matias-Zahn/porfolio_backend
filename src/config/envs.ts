import 'dotenv/config'
import {get} from 'env-var'


export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    EMAIL_USER: get('EMAIL_USER').required().asString(),
    EMAIL_PASS: get('EMAIL_PASS').required().asString(),
    SERVICE: get('SERVICE').required().asString(),
}