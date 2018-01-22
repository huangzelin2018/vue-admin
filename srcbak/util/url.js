let baseUrl = "http://www.tpvue.cn";
let url = {
  // user_index_url: baseUrl + "/index/user/index",
  // user_edit_url: baseUrl + "/index/user/edit",
  // user_add_url: baseUrl + "/index/user/add",
  // user_delete_url: baseUrl + "/index/user/delete",
  // user_get_url: baseUrl + "/index/user/get",
  user: {
    delete: baseUrl + "/index/user/delete",
    get: baseUrl + "/index/user/get",
    add: baseUrl + "/index/user/add",
    edit: baseUrl + "/index/user/edit",
    index: baseUrl + "/index/user/index",
  }
}

export default url;
