 module.exports = app.get("/tasks", (req, res) => { 
     res.json({ 
         tasks: [  
             {title: "Buy some shoes"},
             {title: "Fix notebook"} 
         ]     
     }); 
 }); 