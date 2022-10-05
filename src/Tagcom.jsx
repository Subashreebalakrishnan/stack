function Tagcom (samp) {

   return <div className="container"> 
   <div className="row">
   <div className="card">
   <div className="card-header">
      <h5><span className="badge bg-secondary">{samp.data.pgm}</span></h5></div>
   <div className="card-body">{samp.data.ques} questions</div>
   
 </div>
 </div>
 </div>
}

export default Tagcom