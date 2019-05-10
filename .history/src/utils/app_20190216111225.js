
import wepy from 'wepy'
import util from '../utils/util'
//判断登录
function is_login(){
    let that = this;
    let timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    let user = wx.getStorageSync('access_token');
    if(user.expires_in>timestamp){
        return;
    }else{
        that.login();
    } 
}
//单点登录
function login() {
    let extConfig = wepy.$instance.globalData.payMessage;
    wx.getStorage({
        key:'userInfoLogin',
        success:res=>{
            let user = res.data;
            wx.login({
                //获取code
                success:res=>{
                    wx.request({
                        url: 'https://sso.qumatou.com.cn/' +'api/mini_login',
                        method:'POST',
                        dataType:'json',
                        data: {
                            code:res.code,
                            app_id:extConfig.thirdAppId,
                            iv:user.iv,
                            encryptData:user.encryptedData,
                            grant_type:'client_shop_credentials'
                        },
                        header: {                                                                                                                                                                       
                            'Accept': 'application/vnd.sso.v1+json',
                            // SandBox : true
                        },
                        success: function(res) {
                            let status_code=res.statusCode;
                            if(status_code!=200){
                                wx.showToast({title: '登录失败', icon: 'none', duration: 2000});
                                wx.removeStorageSync('access_token');
                            }else{
                                let timestamp = Date.parse(new Date());
                                timestamp = timestamp / 1000 + res.data.expires_in;
                                let access_token = {'access_token':res.data.access_token,'expires_in':timestamp};
                                wx.showToast({title: '登录成功', icon: 'success', duration: 2000});
                                wx.setStorage({
                                    key:'access_token', 
                                    data:access_token,
                                });
                                wx.setStorage({
                                    key:'token', 
                                    data:access_token.access_token,
                                });
                                wx.setStorage({
                                    key:"openid",
                                    data:res.data.open_id
                                })
                                wx.setStorage({
                                    key:"userId",
                                    data:res.data.message
                                })
                            } 
                        }
                    });
                }
            })
        },
        fail:res=>{
        }
    })    
}
//判断该页面是否需要跳转登录
function is_skip(skipUrl){
    wx.getStorage({
        key:'pagesUrl',
        success:res=>{
            res.data.forEach((item,index)=>{
                if(item.url == util.getCurrentPageUrl()){

                    wx.getStorage({
                        key:'access_token',
                        success:res=>{},
                        fail:res=>{
                            console.log("跳转登录页面")
                            //缓存里面没有access_token,跳转登录页面
                            wx.navigateTo({
                                url:skipUrl
                            })
                        }
                    })
                }
            })
        }
    })
}
module.exports = {
    is_login:is_login,
    login:login,
    is_skip:is_skip
}