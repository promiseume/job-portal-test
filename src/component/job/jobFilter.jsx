import React from "react";
import "antd/dist/antd.css";
import { Checkbox } from "antd";
import './jobFilter.css';
import { Input, Badge } from "antd";
import { Slider } from 'antd';


export default function JobFilter() {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const handleChange = (value) => {
    console.log('onChange: ', value);
  };
  
  const onAfterChange = (value) => {
    console.log('onAfterChange: ', value);
  };
  
  const { Search } = Input;
	const onSearch = () => {
		console.log("here")
	}

  return (
    <>
      <div className='sort-by'>
        <h3>Sort by</h3>
        <Checkbox.Group
            style={{
              width: "100%",
            }}
            onChange={onChange}
          >
            <div>
              <Checkbox value="fulltime">Fulltime</Checkbox>
              <Checkbox value="freelance">Freelance</Checkbox>
            </div>
          </Checkbox.Group>
      </div>
      <section className='filter-sec'>
        <div className='filter-header'>
          <h3>Filters</h3>
          <p>clear all</p>
        </div>
        <div className='filter-list'>
            <p>job type</p>
          <Checkbox.Group
            style={{
              width: "100%",
            }}
            onChange={onChange}
          >
            <div>
              <Checkbox value="fulltime">Fulltime</Checkbox>
              <Checkbox value="freelance">Freelance</Checkbox>
            </div>
          </Checkbox.Group>
        </div>
        <div className='filter-list'>
            <p>Experience Level</p>
          <Checkbox.Group
            style={{
              width: "100%",
            }}
            onChange={onChange}
          >
            <div>
              <Checkbox value="expert">Expert</Checkbox>
              <Checkbox value="intermidate">Intermediate</Checkbox>
              <Checkbox value="beginner">Beginner</Checkbox>
            </div>
          </Checkbox.Group>
        </div>
        <div className='filter-list'>
            <p>Preffered Location</p>
          <Checkbox.Group
            style={{
              width: "100%",
            }}
            onChange={onChange}
          >
            <div>
              <Checkbox value="remote">Remote</Checkbox>
              <Checkbox value="office">Office</Checkbox>
              <Checkbox value="both">Both</Checkbox>
            </div>
          </Checkbox.Group>
        </div>
        <div className='filter-list'>
            <p>Location</p>
            <Search
                placeholder="Anywhere"
				onSearch={onSearch}
				style={{ width: "100%", borderRadius:"5px" }}
			/>
        </div>
        <div className='filter-list'>
            <p>Company</p>
            <Search
                placeholder="Anywhere"
				onSearch={onSearch}
				style={{ width: "100%", borderRadius:"5px" }}
			/>
        </div>
        <div>
            <p>Salary<span style={{fontSize:'9px',marginLeft:'3px'}}>per year</span></p>
            <Slider
      range
      step={10}
          defaultValue={[20, 70]}
           onChange={handleChange}
          onAfterChange={onAfterChange}
    />
        </div>
        <div className='min-max-btn'>
          <button>Min.&nbsp; ₹5,00,000</button>
          <button>Max.&nbsp; ₹15,00,000</button>
        </div>
      </section>
    </>
  );
}
