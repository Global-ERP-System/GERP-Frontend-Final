import React,{useState} from 'react';

import StudyPdf from './studypdf/studyPdf';

import './Studymaterial.css';

const Info=[
    {
        subject:'DBMS',
        teacher:'Ms. Erica',
        files:[
            'Unit 1 - Arrays',
            'Unit 2 - Structures',
            'Unit 3 - File Handling'
        ],
        updated:'20-07-2020  22:30'
    },
    {
        subject:'Java',
        teacher:'Ms. Natasha',
        files:[
            'Unit 1 - Error Handling',
            'Unit 2 - Classes',
            'Unit 3 - Templates'
        ],
        updated:'06-08-2020  13:00'
    },
    {
        subject:'Python',
        teacher:'Prof. Nolan',
        files:[
            'Unit 1 - String Slicing',
            'Unit 2 - Tuples',
            'Unit 3 - List Comprehension'
        ],
        updated:'13-06-2020  00:25'
    }
]

const StudyMaterial=props=>{
    let studyArray=null;
    studyArray=Info.map(info=>{
        return <StudyPdf 
            subject={info.subject}
            teacher={info.teacher}
            files={info.files} 
            updated={info.updated}/>
    })
    return (
        <div className='Material'>
            <h2>Study Material</h2>
            <div className='List'>
                <header>
                    <li>Subject</li> <li>Teacher</li> <li>File</li> <li>Last Updated</li>
                </header>
                {studyArray}
            </div>
        </div>
    );
};

export default StudyMaterial;
