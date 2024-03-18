class File extends Component {
    constructor(name, size, path, author) {
      super();
      this.name = name;
      this.size = size;
      this.path = path;
      this.author = author;
    }
   
    print() {
      console.log(`The File with the name ${this.name} whose size is ${this.size} KB, present is ${this.path}`);
    }
    
    name() {
        return this.name;
    }

    size() {
      return this.size;
    }

    path() {
        return this.path;
    }

    author() {
        return this.author;
    }
  } 