import fetch from '../utils/fetch';
import userUrl from '../config/server/user';
import userHelper from 'focus-core/user';
import utils from './utils';

export default {
    loadMe() {

        return fetch(userUrl.loadMe(), utils.computeHeaders()).then(
            (res) => {
                userHelper.setLogin({...userHelper.getLogin(), ...res});
                return res;
            }, 
            err => {
                throw err;
            }
        );
    },
    create(data) {
        return fetch(userUrl.create({data}));
    },
    connect(data) {
        return fetch(userUrl.connect({data}));
    },
    disconnect() {
        utils.deleteCookie('tokenJWT');
    }
    
};
