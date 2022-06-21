import { path } from '../../commons/path';
import { httpService } from '../../commons/http.service';

const args = { ...path, path: '/people' };

export function listCharacter(page) {
    return httpService.get({...args, args: page});
}
