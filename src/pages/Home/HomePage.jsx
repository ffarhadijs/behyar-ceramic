import React from 'react';
import Search from '../../components/Search/Search';
import Cards from '../../components/Cards/Cards';
import Video from '../../components/Video/Video';
import Layout from "../../components/HOC/Layout";
import LastBlogs from '../../components/LastBlogs/LastBlogs';
import PostList from '../../components/PostList/PostList';
import CourseList from '../../components/CourseList/CourseList';

const HomePage = () => {
    return (
        <div className='my-6'>
            <Search/>
            <LastBlogs/>
            <PostList/>
            <CourseList/>
            {/* <Video/> */}
            {/* <Cards/> */}
        </div>
    );
};

export default Layout(HomePage);