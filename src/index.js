const express = require('express');

const cors = require('cors');

const { uuid, isUuid } = require('uuidv4')

const app = express();

app.use(cors());

app.use(express.json());

const projects = [];

function logRequest(req, resp, next){
    const { method, url } = req;

    const logLabel = `[${method.toUpperCase()}] ${url}`;

    console.time(logLabel);

    next();

    console.timeEnd(logLabel);
}


function validateProjectId(req, resp, next){
    const { id } = req.params;

    if(!isUuid(id)){
        return resp.status(400).json({error: "invalido ID"});
    }
    next();
}
app.use(logRequest);

app.get('/projects',(req,resp)=>{
    
    const { title } = req.query;

    const results = title
    ? projects.filter(proj=>proj.title.includes(title))
    : projects;
    console.log(title);

    return resp.json([results]);

});



app.get('/mso', (req, resp) => {

    const query = req.query;
    console.log(query.nome)

    return resp.json([
        'Mso3344',
        'Mso3345',
        'Mso3346',
    ]);
    
});

app.post('/projects', (req, resp) => {

    const  { title, owner} = req.body;

    const project = { id:uuid(), title, owner}

    projects.push(project);

    return resp.json(project);

});

app.post('/mso', (req, resp) => {    

    const body = req.body;
    console.log(body);

    const { id, nome } = req.body;
    console.log(`O nome é ${nome} e o Id é ${id}`)

    return resp.json([
        'Mso3344',
        'Mso3345',
        'Mso3346',
        'Mso3347',
    ]);
    
});

app.put('/projects/:id', (req, resp) => {
    const { id } = req.params;
    const { title, owner } = req.body;

    const projectindex = projects.findIndex(project => project.id===id);
   
    if ( projectindex < 0 )
       { return resp.status(400).json({erro:"Projeto não encontrado."})};

    const project = {
        id, title, owner
    };

    console.log(project);

    projects[projectindex] = project;

    return resp.json({project});
    
});

app.put('/mso/:id', (req, resp) => {
    const params = req.params;
    const { id } = req.params;
    console.log(params);
    console.log(id);
    return resp.json([
        'Mso3347',
        'Mso3345',
        'Mso3346',
        'Mso3347',
    ]);
    
});

app.delete('/projects/:id', (req, resp) => {
    const { id } = req.params;

    const projectindex = projects.findIndex(project => project.id===id);    
    
    console.log(projectindex);
    
    if ( projectindex < 0 )
       { return resp.statusCode(400)
         .json({erro:"Projeto não encontrado."})};
      
    projects.splice(projectindex, 1);

    return resp.status(204).send();
            
});

app.delete('/mso/:id', (req, resp) => {
    return resp.json([
        'Mso3347',        
        'Mso3346',
        'Mso3347',
    ]);
    
});


app.listen(3333, ()=> {
    console.log('🚀 Banck-End Started')
});