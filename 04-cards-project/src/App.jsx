
import Cards from './components/Cards'



const App = () => {


  const jobOpenings = [
    {
      brandLogo: 'https://i.pinimg.com/736x/29/f6/41/29f641b507ccb60bb7a62a830b988736.jpg',
      nameOfCompany: 'Amazon',
      datePosted: '5 days ago',
      post: 'Senior Software Development Engineer',
      tag1: 'Full-Time',
      tag2: 'Senior-Level',
      pay: '$130/hr',
      location: 'Bangalore, India'
    },
    {
      brandLogo: 'https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg',
      nameOfCompany: 'Google',
      datePosted: '2 weeks ago',
      post: 'Cloud Network Engineer',
      tag1: 'Full-Time',
      tag2: 'Mid-Level',
      pay: '$115/hr',
      location: 'Mumbai, India'
    },
    {
      brandLogo: 'https://thumbs.dreamstime.com/b/meta-logo-icon-american-multinational-company-parent-organization-facebook-instagram-whatsapp-others-vector-233392134.jpg',
      nameOfCompany: 'Meta',
      datePosted: '1 week ago',
      post: 'Data Scientist - AI/ML',
      tag1: 'Full-Time',
      tag2: 'Senior-Level',
      pay: '$150/hr',
      location: 'New Delhi, India'
    },
    {
      brandLogo: 'https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg',
      nameOfCompany: "Apple",
      datePosted: '10 days ago',
      post: 'Product Design Lead',
      tag1: 'Full-Time',
      tag2: 'Lead',
      pay: '$165/hr',
      location: 'Chennai, India'
    },
    {
      brandLogo: 'https://placehold.co/40x40/000000/ffffff?text=N',
      nameOfCompany: 'Netflix',
      datePosted: '3 weeks ago',
      post: 'Backend Developer - Streaming',
      tag1: 'Full-Time',
      tag2: 'Senior-Level',
      pay: '$140/hr',
      location: 'Pune, India'
    },
    {
      brandLogo: 'https://placehold.co/40x40/FF5722/ffffff?text=O',
      nameOfCompany: 'Oracle',
      datePosted: '4 days ago',
      post: 'Database Administrator',
      tag1: 'Part-Time',
      tag2: 'Junior-Level',
      pay: '$75/hr',
      location: 'Hyderabad, India'
    },
    {
      brandLogo: 'https://placehold.co/40x40/0078D4/ffffff?text=M',
      nameOfCompany: 'Microsoft',
      datePosted: '6 days ago',
      post: 'Azure Cloud Consultant',
      tag1: 'Full-Time',
      tag2: 'Mid-Level',
      pay: '$125/hr',
      location: 'Bangalore, India'
    },
    {
      brandLogo: 'https://placehold.co/40x40/512DA8/ffffff?text=S',
      nameOfCompany: 'Salesforce',
      datePosted: '1 week ago',
      post: 'Frontend Engineer (React)',
      tag1: 'Full-Time',
      tag2: 'Senior-Level',
      pay: '$120/hr',
      location: 'Mumbai, India'
    },
    {
      brandLogo: 'https://placehold.co/40x40/FBC02D/000000?text=I',
      nameOfCompany: 'Intel',
      datePosted: '15 days ago',
      post: 'Embedded Systems Architect',
      tag1: 'Full-Time',
      tag2: 'Expert',
      pay: '$175/hr',
      location: 'New Delhi, India'
    },
    {
      brandLogo: 'https://placehold.co/40x40/29B6F6/ffffff?text=C',
      nameOfCompany: 'Cisco',
      datePosted: '3 days ago',
      post: 'Cyber Security Analyst',
      tag1: 'Part-Time',
      tag2: 'Junior-Level',
      pay: '$85/hr',
      location: 'Chennai, India'
    }
];

  return (
    <div className='parent'>
      {jobOpenings.map((elem,idx) => {
          return <div key = {idx}>
            <Cards img = {elem.brandLogo} company = {elem.nameOfCompany} date = {elem.datePosted}
            title = {elem.post} role = {elem.tag1} level = {elem.tag2} 
            amount = {elem.pay} location = {elem.location}/>
          </div>
      })}
    </div>
  );
}

export default App
