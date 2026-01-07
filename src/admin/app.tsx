import { useNotification } from "@strapi/strapi/admin";

// const handleClick = async () => {
// try {
//     const res = await fetch('/admin/seed-surahs', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       credentials: 'include',
//     });

//     if (!res.ok) throw new Error(`Seeding failed: ${res.status} ${res.statusText}`);

//     const data = await res.json();
//     alert(data.message || 'Seeding complete!');
//   } catch (err) {
//     console.error(err);
//     alert('Seeding failed.');
//   }
// };

const handleClick = async () => {
  try {
    // Strapi Cloud backend URL
    const response = await fetch('/api/seed-surahs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // If you are using token-based auth (optional):
        // 'Authorization': `Bearer ${yourToken}`,
      },
      credentials: 'include', // ✨ important for admin panel auth
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Seeding failed: ${response.status} ${errorText}`);
    }

    const result = await response.json();
    console.log('✅ Seeding Success:', result);
    alert(result.message || 'Seeding completed!');
  } catch (error: any) {
    console.error('❌ Seeding Error:', error);
    alert(`Seeding failed: ${error.message}`);
  }
};


export default {
    bootstrap(app : any) {
        app.getPlugin('content-manager').injectComponent('editView', 'right-links', {
            name: 'PreviewButton',
            Component: () => (
                <button
                    style={{
                        width: "100%",
                        height: "3.2rem",
                        textDecoration: "none",
                        border: "1px solid #4945ff",
                        background: "#4945ff",
                        color: "#ffffff",
                        borderRadius: "0.4rem",
                        cursor: "pointer",
                    }}
                    onClick={handleClick}
                >
                    Inject Default Data
                </button>
            ),
        });
    },
};