<script>
  function showPhoneNumber() {
    var phoneElement = document.getElementById('phone-number');
    if (phoneElement.style.display === 'none' || phoneElement.style.display === '') {
      phoneElement.style.display = 'block';
    } else {
      phoneElement.style.display = 'none';
    }
  }
</script>
