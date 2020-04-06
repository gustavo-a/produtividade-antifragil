<template>
  <section class="py-16">
    <div class="container">
      <div class="flex justify-center mb-16">
        <div>
          <h2 class="title-1">
            Os Módulos
          </h2>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="timeline w-full lg:w-3/4">
          <ol>
            <li>
              <div class="content">
                <div class="titulo">
                  Lorem ipsum dolor sit amet.
                </div>
                <div class="duracao">12 horas</div>
                <div class="descricao">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  soluta quasi non labore odit tempore praesentium ea culpa.
                  Earum odio voluptatum facilis aut distinctio necessitatibus
                  quis expedita deleniti debitis inventore?
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="titulo">
                  Lorem ipsum dolor sit amet.
                </div>
                <div class="duracao">12 horas</div>
                <div class="descricao">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia totam quo numquam nisi amet ratione maiores eaque,
                  velit dolor sint consectetur, reprehenderit ab minus provident
                  voluptate alias! At, dolore magni.
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="titulo">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div class="duracao">12 horas</div>
                <div class="descricao">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident ut repudiandae, ducimus error nostrum voluptate
                  doloribus ab vitae ex blanditiis dicta maxime eius ratione
                  accusamus quidem aliquid! Veniam, dolores pariatur.
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="titulo">
                  Lorem ipsum, dolor sit amet consectetur adipisicing.
                </div>
                <div class="duracao">12 horas</div>
                <div class="descricao">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas cumque vero laboriosam eligendi, assumenda quidem
                  commodi. Eos perspiciatis iste ratione facilis aliquid
                  dignissimos suscipit, adipisci temporibus deserunt animi
                  voluptates commodi!
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Modulos'
}
</script>

<style lang="scss" scoped>
.timeline {
  @apply .relative;

  &::before {
    content: '';
    width: 3px;
    height: 75%;
    background: rgba($color: #a4c546, $alpha: 0.4);
    @apply .block .absolute .m-auto .right-0 .left-0;
  }
  ol {
    counter-reset: number;
    position: relative;

    li {
      &::before {
        counter-increment: number;
        content: counter(number);
        @apply .absolute .right-0 .left-0 .m-auto .block .text-center .text-white .bg-cafe-ardosia .text-2xl .rounded-full .font-sans-secondary;
        width: 36px;
        height: 36px;
      }

      .content {
        width: 50%;
      }

      &:nth-of-type(odd) {
        .content {
          @apply .text-right .pr-16;
        }
      }

      &:nth-of-type(even) {
        .content {
          @apply .text-left .pl-16;
          transform: translate3d(100%, 0, 0);
        }
      }

      @media (max-width: 767px) {
        &:nth-of-type(odd) {
          .content {
            @apply .pr-12;
          }
        }

        &:nth-of-type(even) {
          .content {
            @apply .pl-12;
          }
        }
      }

      @media (max-width: 767px) {
        &:nth-of-type(odd),
        &:nth-of-type(even) {
          .content {
            @apply .mb-16 .pt-16 .text-center .pr-0 .pl-0;
            transform: translate3d(50%, 0, 0);
            * {
              background: #fff;
            }
          }
        }
      }

      @media (max-width: 500px) {
        &:nth-of-type(odd),
        &:nth-of-type(even) {
          .content {
            width: 100%;
            @apply .pr-4 .pl-4;
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }

  .titulo {
    @apply .font-sans-secondary .text-xl .italic .text-cafe-verde-amarelado;
  }

  .duracao {
    @apply .font-bold .mb-4;
  }
}
</style>
