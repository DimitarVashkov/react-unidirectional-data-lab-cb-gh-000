'use strict';

import Store from './Store';

class FileStore extends Store {
    constructor(initialState){
        super(initialState);
        this.state = initialState;
    }

    removeFile(index){
        
        if (this.state.length == 1){
            this.setState(['']);
        } else if (this.state.length > 1){
            this.state.splice(index, 1);
            this.setState(this.state);
        }
    }

    updateFile(index, file) {
        const files = this.getState().slice();
        files.splice(index, 1, file);
        this.setState(files);
    }


    addFile(){
        this.setState(
            [...this.state,'']
        )
    }
}

const fileStore = new FileStore(['']);

export default fileStore;
