<script>
import Circular from '../resources/circular.svg';
export default Circular;
</script>

<style>
@keyframes Circular-_-rotate {
  100% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}

@keyframes Circular-_-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
</style>
