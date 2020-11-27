<script>
import Dots from '../resources/dots.svg';
export default Dots;
</script>

<style>
@keyframes Dots-_-rotate {
  0% {
    transform: rotate3d(0, 0, 1, 225deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }

  7% {
    transform: rotate3d(0, 0, 1, 345deg);
    animation-timing-function: linear;
  }

  30% {
    transform: rotate3d(0, 0, 1, 455deg);
    animation-timing-function: ease-in-out;
  }

  39% {
    transform: rotate3d(0, 0, 1, 690deg);
    animation-timing-function: linear;
  }

  60% {
    transform: rotate3d(0, 0, 1, 815deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }

  75% {
    transform: rotate3d(0, 0, 1, 945deg);
    animation-timing-function: ease-out;
  }

  76% {
    transform: rotate3d(0, 0, 1, 945deg);
    opacity: 0;
  }

  100% {
    transform: rotate3d(0, 0, 1, 945deg);
    opacity: 0;
  }
}
</style>
