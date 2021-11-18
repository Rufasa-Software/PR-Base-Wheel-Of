import {newUser, renderList} from '../ts/create_user';
import { usersArray } from './elements';
import { play } from './play_event';

function app() : any
{
    
    newUser();
    play();
}

app();


