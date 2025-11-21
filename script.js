document.addEventListener('DOMContentLoaded', () => {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const colorInput = document.getElementById('color');
    const authorInput = document.getElementById('author');
    const footerInput = document.getElementById('footer');
    const generatedUrlInput = document.getElementById('generated-url');
    const copyButton = document.getElementById('copy-button');

    const previewPill = document.querySelector('.embed-color-pill');
    const previewAuthor = document.querySelector('.embed-author');
    const previewTitle = document.querySelector('.embed-title');
    const previewDescription = document.querySelector('.embed-description');
    const previewFooter = document.querySelector('.embed-footer');

    function updatePreviewAndURL() {
        const title = titleInput.value;
        const description = descriptionInput.value;
        const color = colorInput.value;
        const author = authorInput.value;
        const footer = footerInput.value;

        // Update Preview
        previewPill.style.backgroundColor = color;
        previewAuthor.textContent = author;
        previewTitle.textContent = title;
        previewDescription.textContent = description;
        previewFooter.textContent = footer;

        // Generate URL
        const params = new URLSearchParams();
        if (title) params.set('t', title);
        if (description) params.set('d', description);
        if (color) params.set('c', color.substring(1)); // remove #
        if (author) params.set('a', author);
        if (footer) params.set('f', footer);

        const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '') + 'display.html';
        generatedUrlInput.value = `${baseUrl}?${params.toString()}`;
    }

    [titleInput, descriptionInput, colorInput, authorInput, footerInput].forEach(input => {
        input.addEventListener('input', updatePreviewAndURL);
    });

    copyButton.addEventListener('click', () => {
        generatedUrlInput.select();
        document.execCommand('copy');
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = 'Copy';
        }, 2000);
    });

    // Initial call
    updatePreviewAndURL();
});