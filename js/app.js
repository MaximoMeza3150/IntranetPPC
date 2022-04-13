const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

if(indexedDB) {
    let db;
    const request = indexedDB.open('Estancos', 1)
    
    request.onsuccess =()=> {  
        db = request.result
        console.log("open", db)
    }
    // Pregunta si esta creada
    request.onupgradeneeded = (e) =>{
        db = e.target.result
        console.log("Creada", db)
        const objectStore = db.createObjectStore('CRYO1', {
            keyPath: "fechaDrenaje" 
        })
        const objectStore2 = db.createObjectStore('CRYO3y4', {
            keyPath: "fechaDrenaje" 
        })
        const objectStore3 = db.createObjectStore('CRYO5yCSU3', {
            keyPath: "fechaDrenaje" 
        })
        const objectStore4 = db.createObjectStore('CSU', {
            keyPath: "fechaDrenaje" 
        })
        const objectStore5 = db.createObjectStore('TC1', {
            keyPath: "fechaDrenaje" 
        })
        const objectStore6 = db.createObjectStore('TC2', {
            keyPath: "fechaDrenaje" 
        })
        const objectStore7 = db.createObjectStore('SSA', {
            keyPath: "fechaDrenaje" 
        })
        const objectStore8 = db.createObjectStore('SSB', {
            keyPath: "fechaDrenaje" 
        })
        const objectStore9 = db.createObjectStore('PTAR', {
            keyPath: "fechaDrenaje" 
        })
        const objectStore10  = db.createObjectStore('WHC', {
            keyPath: "fechaDrenaje" 
        })
    }
}