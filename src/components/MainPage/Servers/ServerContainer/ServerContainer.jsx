import React from 'react';
import './ServerContainer.css';
import ServersCluster from './1.svg';

const ServerContainer = () => {
    return (
        <>
            <div className='servers_con'>
                <div className='aval_servers'>
                    <div className='cluster'>
                        <h1>1</h1>
                        <img src={ServersCluster}/>
                    </div>
                    
                    <div className='cluster'>
                        <h1>2</h1>
                        <img src={ServersCluster}/>
                    </div>
                    
                    <div className='cluster'>
                        <h1>3</h1>
                        <img src={ServersCluster}/>
                    </div>
                    
                    <div className='cluster'>
                        <h1>4</h1>
                        <img src={ServersCluster}/>
                    </div>
                    
                    <div className='cluster'>
                        <h1>5</h1>
                        <img src={ServersCluster}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServerContainer;