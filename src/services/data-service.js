import NotificationService, { NOTIF_WISHLIST_CHANGED } from './notification-service'

//singleton data service
let ns = new NotificationService()

let instance = null;


let wishList =  []


class DataService {
  constructor(){
    if(!instance){
      instance = this
    }
    return instance
  }

  itemOnWishList = item => {
    for(let x = 0; x < wishList.length; x++){
      if(wishList[x]._id === item._id){
        return true
      }
    }
    return false
  }

  addWishListItem = item => {
    wishList.push(item)
    ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList)
  }

// consider changeing to a filter function
  removeWishListItem = item => {
    for(let x = 0; x < wishList.length; x++){
      if(wishList[x]._id === item._id){
        wishList.splice(x, 1)
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList)
        break;
      }
    }
  }

}


export default DataService
