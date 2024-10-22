let promError = false;

function getPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (promError) {
                reject(`Hat nicht geklappt`);
            } else {
                resolve("Hat geklappt");
            }
        }, 300);
    });
}

async function usePromise() {
    try {
        let prom = await getPromise();
        console.log(prom);
    } catch (error) {
        console.log(error);
    }
    
}