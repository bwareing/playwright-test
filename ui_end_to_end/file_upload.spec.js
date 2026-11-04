import {test, expect, request} from '@playwright/test';

test('File upload', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole('link', {name:'File Upload'}).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/upload');
    await expect(page.getByText('File Uploader')).toBeVisible();
    await expect(page.getByRole('button', {name:'Upload'})).toBeVisible();   
    await expect(page.getByRole('button', {name:'Choose File'})).toBeVisible();
    await page.locator('#file-upload').setInputFiles('tests/test-data/sample-upload.txt');
    await page.getByRole('button', {name: 'Upload'}).click();
    await expect(page.getByText('File Uploaded!')).toBeVisible();
    await expect(page.getByText('sample-upload.txt')).toBeVisible();
})

test('File upload without file', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.getByRole('button', {name: 'Upload'}).click();
    await expect(page.getByText('Internal Server Error')).toBeVisible();
    await expect(page.getByText('No file was chosen. Please choose a file to upload.')).toBeVisible();
    await page.getByRole('link', {name: 'Back to the File Uploader'}).click();
    await expect(page.getByText('File Uploader')).toBeVisible();
})
