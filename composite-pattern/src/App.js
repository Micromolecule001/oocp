import './App.scss';
import { CollectionComponent } from './components/collectionComponent';


export default function App() {
  const documents = {
    1: {
      name: 'file1',
      author: 'unknown1',
      fileSize: '12bit',
      fileType: '.txt',
      filePath: './home/folder1/'
    },
    2: {
      name: 'file2',
      author: 'unknown2',
      fileSize: '15bit',
      fileType: '.pdf',
      filePath: './home/folder2/'
    },
    3: {
      name: 'file3',
      author: 'unknown3',
      fileSize: '20bit',
      fileType: '.doc',
      filePath: './home/folder3/'
    },
  };

  return (
    <div className='app-body'>
      
      <h1 className='main-title'>Document Management System</h1>
      
      <CollectionComponent docs={ documents } />        
    
    </div>
  );
}
