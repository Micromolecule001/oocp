import React from 'react';

class Folder extends React.Component {
    constructor(props) {
      super(props);
      this.id = props.id;
      this.name = props.name;
      this.files = [];
    }
    
    add(name, size, path, author) {
      this.files[this.files.length] = new File(name, size, path, author)
      console.log('file added: ', this.files[this.files.length - 1])
    }
    
    delete() {
      
    }
    
    folderData() {
      return {
        id: this.id,
        name: this.name,
        files: this.files
      }
    }
  }

  export default Folder;