import request from '../libs/request';

export const GET_HOTLIST = 'GET_HOTLIST';
export const GET_COMINGSOONLIST = 'GET_COMINGSOONLIST';
export const GET_TOPLIST = 'GET_TOPLIST';

let home = {
    getHotList: (count)=>((dispatch, getState) => {
        request.get('/api/movie/in_theaters',{start: 0,count: count}).then((res)=>{
            dispatch(home.hasGetHotList(res.subjects))
        })
    }),
    getComingSoonList:(count)=>((dispatch, getState)=>{
        request.get('/api/movie/coming_soon',{start: 0,count: count}).then((res)=>{
            dispatch(home.hasGetComingSoonList(res.subjects))
        })
    }),
    getTopList:(count)=>((dispatch, getState)=>{
        request.get('/api/movie/top250',{start: 0,count: count}).then((res)=>{
            dispatch(home.hasGetTopList(res.subjects))
        })
    }),
    hasGetHotList: (data) => ({
        type: GET_HOTLIST,
        hotList: data
    }),
    hasGetComingSoonList: (data) => ({
        type: GET_COMINGSOONLIST,
        comingSoonList: data
    }),
    hasGetTopList: (data)=>({
        type: GET_TOPLIST,
        topList: data
    })
}
export default home;
