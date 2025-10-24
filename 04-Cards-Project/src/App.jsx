import Card from './Components/Card'

const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/kcwUNFQXnhfIN8R_IcdMTWqvnE5qdZmvcIxvLigMHK4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/rKvHhqMFzZf_F6JYJAdS5m91bbz0QvtTsXdQx1bd1_w/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTU0NjUvMTU0/NjU1OTkucG5n",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo:"https://imgs.search.brave.com/uU0bbL7a8VHe8UstHE4lGkJC5FomSK8_T4mwWSKLtZ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Delhi, India"
  },
  {
    brandLogo:"https://imgs.search.brave.com/xKejBdoOFZmUwCCM2YtVDw7ULtWf_ogCsVWxFpVyT-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMi8w/NC8xMC8yMy8zMy9s/b2dvLTI3MDQ2XzY0/MC5wbmc",
    companyName: "Microsoft",
    datePosted: "1 month ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Pune, India"
  },
  {
    brandLogo:"https://imgs.search.brave.com/cGFymRrwIgRaB0hKYvEAvBTiXDkLd0vN3eNhrj0j7us/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE3LzZm/L2M3LzE3NmZjNzkx/NzUwYTQ1ZjA2Mzk1/ODY0YTA1ZThmNWVl/LmpwZw",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo:"https://imgs.search.brave.com/SBf4pxugmlP3An7Nkj60Ix1btetYoGTfPylQyCZB8-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC81/NC8zOC90ZXNsYS1i/cmFuZC1sb2dvLWNh/ci1zeW1ib2wtd2l0/aC1uYW1lLWJsYWNr/LWRlc2lnbi12ZWN0/b3ItNDYxNTU0Mzgu/anBn",
    companyName: "Tesla",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Austin, USA"
  },
  {
    brandLogo:" https://imgs.search.brave.com/OkopbEvzu46RMPqn94f6DVwy92dJjvOEwNbLnPDCuNs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93cC5s/b2dvcy1kb3dubG9h/ZC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMTAvTlZJ/RElBX2xvZ29fUi03/MDB4NTE1LnBuZw",
    companyName: "NVIDIA",
    datePosted: "6 weeks ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo:"https://imgs.search.brave.com/C11e-QdL8AiVZQIQ5gzYKwX2sX2fzaQ4CMAsNc4wdfs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWdueW91cndh/eS5uZXQvYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/OC9sb2dvLXN2Zy5q/cGc",
    companyName: "IBM",
    datePosted: "2 months ago",
    post: "DevOps Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Toronto, Canada"
  },
  {
    brandLogo:"https://imgs.search.brave.com/LbQ9DOW4fdKsp80DtlJJ5RpCsX3_LUsssgr6ShPhvug/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNi0xMjAweDc1/MC5wbmc",
    companyName: "Adobe",
    datePosted: "1 week ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "San Francisco, USA"
  }
];


console.log(jobOpenings);


const App = () => {
  return (
    <div className='parent' >
      {jobOpenings.map(function (elem,idx) {

        return <div key= {idx}>
        <Card companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} /></div>
      }
      )}
    </div>
  )
}

export default App
