<template>
    <div>
        <div class="container-fluid">
            <div class="d-flex">
                <div class="col d-flex flex-column align-items-start">
    
                    <h4>
                        {{ content.subTitle}}
                    </h4>
    
                    <h2>
                        {{ content.title }}
                    </h2>
    
                    <p>
                        {{ content.para}}
                    </p>
    
                    <div class="my_btn">
                        {{ content.btn }}
                    </div>
    
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>

    // import heroContent from '../hero';

      export default {
        props: {
            content: Object
        },
      }
  </script>
  
  <style lang="scss" scoped>
  
  </style>