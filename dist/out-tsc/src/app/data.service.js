import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import { from } from 'rxjs';
let DataService = class DataService {
    constructor(db, afStorage) {
        this.db = db;
        this.afStorage = afStorage;
    }
    getFiles() {
        let ref = this.db.list('files');
        return ref.snapshotChanges().pipe(map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }));
    }
    uploadToStorage(information) {
        let newName = `${new Date().getTime()}.txt`;
        return this.afStorage.ref(`files/${newName}`).putString(information);
    }
    storeInfoToDatabase(metainfo) {
        let toSave = {
            created: metainfo.timeCreated,
            url: metainfo.downloadURLs[0],
            fullPath: metainfo.fullPath,
            contentType: metainfo.contentType
        };
        return this.db.list('files').push(toSave);
    }
    deleteFile(file) {
        let key = file.key;
        let storagePath = file.fullPath;
        let ref = this.db.list('files');
        ref.remove(key);
        return this.afStorage.ref(storagePath).delete();
    }
};
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireDatabase, AngularFireStorage])
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map