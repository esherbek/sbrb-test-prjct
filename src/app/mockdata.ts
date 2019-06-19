import { Postage } from './postage';
import { Register } from './register';
import { Observable, of } from 'rxjs';


/** Данные для генерации отправлений и реестров */
const addresses = [
    '635 Glendale Ave. Elmont, NY 11003',
    '232 S. New Ave. Aberdeen, SD 57401',
    '7141C 6th St. Queensbury, NY 12804',
    '7415 West Autumn Street Yonkers, NY 10701',
    '707 Station St. Encino, CA 91316',
    '9553 Pierce St. Massapequa, NY 11758',
    '8753 N. Polygon Dr. Newnan, GA 30263',
    '4 Grandrose Lane Malvern, PA 19355',
    '89 Philmont Ave. Livingston, NJ 07039',
    '68 NW. Bedford Dr. Brick, NJ 08723',
    '478 Fleet St. Lake Zurich, IL 60047',
    '8868 Oakland Drive Beltsville, MD 20705',
    '32 1st St. Moorhead, MN 56560',
    '42 Windsor Road Midland, MI 48640',
    '22 Queen Street Reading, MA 01867',
    '144 Grace Drive Joliet, IL 60435',
    '934 Ridgewood Court Goldsboro, NC 27530',
    '457 Parkview Road Altoona, PA 16601',
    '8121 Blackburn Ave. Concord, NH 03301',
    '7722 West Littleton Lane Somerset, NJ 08873',
];

const names = [
    'Lidia Watson',
    'Alba Cortez',
    'Mable Gregory',
    'Frankie Ramsey',
    'Lottie Arellano',
    'Tyson Peck',
    'Deirdre Harris',
    'Lula Wiggins',
    'Olga Moyer',
    'Hattie Davila',
    'Jeanne Vaughan',
    'Odessa Moody',
    'Rick Cooper',
    'Theron Mckinney',
    'Dillon Savage',
    'Sherman Rubio',
    'Jannie Acosta',
    'Roscoe Beard',
    'Terrell Yu',
    'Lamont Krause',
    'Pasquale Fox',
    'Molly Rush',
    'Leona Michael',
    'Colin Bradford',
    'Cathleen West',
    'Blanche Nolan',
    'Patricia Singleton',
    'Dusty Booker',
    'Ilene Bass',
    'Leticia Cummings',
    'Devon Santiago',
    'Milton Schmitt',
    'Hollis Collins',
    'Wes Snyder',
    'Wilmer Hobbs',
    'Christy Suarez',
    'Edmond Grimes',
    'Lynwood Finley',
    'Cecelia Li',
    'Alva Maddox',
    'Malcolm Caldwell',
    'Freddy Horne',
    'Jame Burch',
    'Kip Huber',
    'Maurice Colon',
    'Bud Patton',
    'Shawna Sheppard',
    'Rose Smith',
    'Mose Pierce',
    'Minnie Neal',
];

function arrGetRandom (arr: Array<any>): any {
    const i = Math.random() * arr.length | 0;
    return arr[i];
}

function randomNumber (base: number = 10): string {
    return Math.random().toString(base).substr(2);
}    


/**
 * MDAT иммитирует поведение HttpClient из стандартного
 * набора модулей Angular возвращая Observable содержащий в себе
 * ответ сервера - в данном случае это массив Реестров/Отправлений
 */
class MDAT {

    private postages: Postage[] = [];
    private registers: Register[] = []

    constructor () {        

        // Создадим десяток реестров
        for (let i=10; i > 0; i--) {
            this.registers.push({
                id: randomNumber(16),
                sender: arrGetRandom(names),
                senderPhone: randomNumber(),
                status: 'created',
            });
        }

        // И к ним немного отправлений
        for (let i=50; i > 0; i--) {
            this.postages.push({
                id: randomNumber(16),
                registerNumber: arrGetRandom(this.registers).id,
                address: arrGetRandom(addresses),
                receiver: arrGetRandom(names),
                contactPhone: randomNumber(),
                status: 'created',
            });
        } 
    }

    // Возвращает все реестры на сервере
    getRegisters (): Observable<Register[]> {
        return of(this.registers);
    }

    // Возвращает все отправления на сервере
    getPostages (): Observable<Postage[]> {
        return of(this.postages);
    }

    // Записывает отправление на сервере
    writePosage (update: Postage): Observable<Postage|Error> {
        const idx = this.postages.findIndex(p => p.id == update.id)
        if (idx === -1)
            return of(new Error(`отправление с идентификатором ${update.id} не существует`));
        this.postages.splice(idx, 1, update)
        return of(this.postages[idx]);
    }
    
}

export const MOCKDATA = new MDAT();
