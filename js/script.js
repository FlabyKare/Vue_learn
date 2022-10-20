new Vue({
   el: "#learnVueJs",
   data() {
      return {
         postTitle: "",
         postDescription: "",
         postArray: [],

         //  posts: [],

         //  likes: 0,
         //  dislikes: 0,
         //  valueTitle: "",
         //  valueBody: "",
      };
   },
   methods: {
      addPost() {
         const addedNewPost = {
            title: this.postTitle,
            description: this.postDescription,
         };
         this.postArray.push(addedNewPost);
         this.postTitle = "";
         this.postDescription = "";
      },
   },
   //    methods: {
   //       createPost() {
   //          const newPost = {
   //             id: Date.now(),
   //             title: this.valueTitle,
   //             body: this.valueBody,
   //          };
   //          this.posts.push(newPost);
   //          this.valueTitle = "";
   //          this.valueBody = "";
   //       },

   //       //   plusLikes() {
   //       //      this.likes++;
   //       //   },
   //       //   plusDislikes() {
   //       //      this.dislikes++;
   //       //   },
   //       //   minesLikes() {
   //       //      this.likes--;
   //       //      if (this.likes <= 0) {
   //       //         this.likes = 0;
   //       //      }
   //       //   },
   //       //   minesDislikes() {
   //       //      this.dislikes--;
   //       //      if (this.dislikes <= 0) {
   //       //         this.dislikes = 0;
   //       //      }
   //       //   },
   //    },
});

new Vue({
   el: ".calculator",
   data() {
      return {
         result: "",
         numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
         operations: ["+", "-", "*", "/"],
      };
   },
   methods: {
      input(char) {
         this.result = this.result.toString();
         this.result += char;
      },
      recet() {
         this.result = "";
      },
      calc() {
         this.result = eval(this.result);
      },
   },
});
