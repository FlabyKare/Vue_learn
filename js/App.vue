<template>
   <section id="learnVueJs">
      <div class="counterInfo">
         <p>Лайков набралось: {{ likes }}</p>
         <p>Дизлайов набралось: {{ dislikes }}</p>
      </div>
      <div class="buttons">
         <button @click="plusLikes">Лайк</button>
         <button @click="plusDislikes">Дизлайк</button>

         <button @click="minesLikes">Убрать лайк</button>
         <button @click="minesDislikes">Убрать дизлайк</button>
      </div>
      <!-- <button>Показать попап</button>
<div class="popup">
    <p></p>
</div> -->
   </section>
</template>

<script>
export default {
   data() {
      return {
         likes: 0,
         dislikes: 0,
      };
   },
   methods: {
      plusLikes() {
         this.likes++;
      },
      plusDislikes() {
         this.dislikes++;
      },
      minesLikes() {
         this.likes--;
         if (this.likes <= 0) {
            this.likes = 0;
         }
      },
      minesDislikes() {
         this.dislikes--;
         if (this.dislikes <= 0) {
            this.dislikes = 0;
         }
      },
   },
};
</script>

<style lang="scss">
#learnVueJs {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   font-size: 30px;
   .counterInfo,
   .buttons {
      display: flex;
      flex-direction: column;
      gap: 20px;
   }
   .buttons {
      margin-top: 20px;
      button {
         padding: 10px 0;
      }
   }
}
</style>
