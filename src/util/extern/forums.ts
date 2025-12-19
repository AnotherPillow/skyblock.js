export function getAvatarURLFromForumsID(id: number | string): string {
    id = id.toString();

    let shortuseridlen = 1;
    if (id.length > 5) shortuseridlen = 3;
    else if (id.length > 4) shortuseridlen = 2;
    
    let shortuserid = id.slice(0, shortuseridlen);

    if (id.length <= 3) shortuserid = '0';
        
    return `https://skyblock.net/data/avatars/l/${shortuserid}/${id}.jpg`;
}