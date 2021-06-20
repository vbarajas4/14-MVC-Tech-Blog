  // Format date as MM/DD/YYYY
module.exports = {
    format_date: (date) => {
     const dateData = new Date(date)
         return `${dateData.getMonth() + 1}
                /${dateData.getDate()}
                /${dateData.getFullYear()}`;
    },
    compare_users: (comment_users, user) => {
      return comment_users === user
    }


  };

