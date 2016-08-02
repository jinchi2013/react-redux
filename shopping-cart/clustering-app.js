/**
 * Created by chi on 8/2/16.
 */
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster){
    for ( var i = 0; i < numCPUs; i++ ){
        cluster.fork();
    }

    Object.keys(cluster.workers).forEach( (id) => {
        console.log("I am running with ID: " + cluster.workers[id].process.pid);
} );

    cluster.on('fork', (worker)=>{
        console.log('Number of CPUs ' + numCPUs);
    console.log('Worker %s spawned', worker.id);
});
    cluster.on('online', (worker)=>{
        console.log('worker %s online', worker.id);
});
    cluster.on('listening', (worker, addr)=> {
        console.log('worker %s listening on %s:%d', worker.id, addr.address, addr.port);
});
    cluster.on('disconnect', (worker)=>{
        console.log('worker %s disconnected', worker.id);
});
    cluster.on('exit', (worker, code, signal)=>{
        console.error('worker %s died (%s)', worker.id, signal || code );
    if( !worker.suicide ){
        console.error('restarting worker');
        cluster.fork();
    }
});
} else {
    require('./server');
}