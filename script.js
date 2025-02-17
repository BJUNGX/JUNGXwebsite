document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const table = document.getElementById('membersTable');
  const rows = table.getElementsByTagName('tr');

  // Lắng nghe sự kiện khi người dùng nhập liệu
  searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toUpperCase();

    // Duyệt qua các dòng (bỏ qua dòng tiêu đề)
    for (let i = 1; i < rows.length; i++) {
      const rowText = rows[i].textContent || rows[i].innerText;
      // Kiểm tra xem dòng có chứa từ khóa không
      if (rowText.toUpperCase().indexOf(filter) > -1) {
        rows[i].style.display = '';
      } else {
        rows[i].style.display = 'none';
      }
    }
  });
});

