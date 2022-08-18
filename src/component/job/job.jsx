import React from 'react'
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import Cards from './cards' 
import JobFilter from './jobFilter'
import './job.css'

export default function Jobs() {
  return (
    <section className='job-section'>
    <h3>All jobs</h3>
    <p>Page 1 of 250</p>
    <section className='job-container'>
      <div className='card-section'>
       <Cards/>
      </div>
      <div className='filter-section'>
        <JobFilter/>
      </div>
    </section>
    <Pagination defaultCurrent={1} total={60}  showSizeChanger={false} responsive/>
    </section> 
    )
}
