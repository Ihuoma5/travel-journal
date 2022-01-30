import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import BlogData from './components/blogData';





function App() {
  const blogElements = BlogData.map(blog => {
    return (
      <Card
       name ={blog.name} 
       location={blog.location} 
       coverImg ={blog.coverImg}
       date={blog.date} 
       text={blog.text} />
    )
})
  return (
    <div className="App">
      <Header />
      {blogElements}
    </div>
  );
}

export default App;
