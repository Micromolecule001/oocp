import './App.scss';
import { DocumentComponent } from './components/documentComponent';
import { CollectionComponent } from './components/collectionComponent';

function App() {

  const documents = {
    1: {
      name: 'file1',
      author: 'unknown1',
      size: '12bit',
      type: '.txt',
      path: './home/folder1/'
    },
    2: {
      name: 'file2',
      author: 'unknown2',
      size: '15bit',
      type: '.pdf',
      path: './home/folder2/'
    },
    3: {
      name: 'file3',
      author: 'unknown3',
      size: '20bit',
      type: '.doc',
      path: './home/folder3/'
    },
  };

  return (
    <div className='app-body'>
      
      <h1 className='main-title'>Document Management System</h1>

      <div className="row-wrapper">

        <DocumentComponent />

        <CollectionComponent docs={ documents } />
        </div>
    </div>
  );
}

export default App;
