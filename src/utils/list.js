export function createLinkList(arrayList) {
    let linkList = null;
    let tail = linkList;
    for (const item of arrayList) {
        const newNode = {
            val: item,
            next: null,
        };

        if (linkList === null) {
            linkList = newNode;
        } else {
            tail.next = newNode;
        }
        tail = newNode;
    }
    return linkList;
}

