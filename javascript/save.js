function onSave() {
    canvasReal.toBlob((blob) => {
        const timestamp = Date.now().toString();
        const a = document.createElement('a');
        document.body.append(a);
        a.download = `paint-${timestamp}.png`;
        a.href = URL.createObjectURL(blob);
        a.click();
        a.remove();
    });
}

document.querySelector('#save').addEventListener('click',onSave);