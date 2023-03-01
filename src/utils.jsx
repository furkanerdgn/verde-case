import store from "./store/index";
import {setUserId} from "./store/auth";
import {setData} from "./store/auth";
import {setSelectedBlog} from "./store/auth";
import {setAddData} from "./store/auth";
import {setDeleteData} from "./store/auth";
import {setUpdateData} from "./store/auth";


export const setUserIdAction = (userId) => {
    store.dispatch(setUserId(userId));
}

export const setDataAction = (data) => {
    store.dispatch(setData(data));
}
export const setSelectedBlogAction = (blog) => {
    store.dispatch(setSelectedBlog(blog));
}
export const setAddDataAction = (data) => {
    store.dispatch(setAddData(data));
}
export const setDeleteDataAction = (id) => {
    store.dispatch(setDeleteData(id));
}
export const setUpdateDataAction = (data) => {
    store.dispatch(setUpdateData(data));
}

