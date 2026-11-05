import {test, expect, request} from '@playwright/test';

test('download a file', async ({page})  => {

    test.setTimeout(120000);
   const expectedFiles = [
    'FINAL_OFFICAL_DAVIS.pdf',
    'IMG.JPG',
    'Images.txt',
    'TR8NQ4OL.pdf',
    'Vendor_Alpha_SOC2_Report.txt',
    'Vendor_Beta_SOC2_Report.txt',
    'Vendor_Gamma_SOC2_Report.txt',
    '_____________________________.txt',
    'agentos-form.pdf',
    'asm-upload.txt',
    'bb.txt',
    'cc-upload.txt',
    'cover-letter-generic.pdf',
    'data.json',
    'dummy_test_file_genl_PMOLGeneralNelson_TestFile_new_txt_45031009_GENNEL04_20250617015141173_39873245_20250617015423052.xml',
    'essai-upload-124638.png',
    'faroiq_upload_test.txt',
    'image.png',
    'images.jpeg',
    'journey.txt',
    'lore-check.txt',
    'report.txt',
    'resume-base.pdf',
    'resume-customer-success.pdf',
    'resume-finance.pdf',
    'resume-gtm-ops.pdf',
    'resume-marketing-analytics.pdf',
    'sample.csv',
    'sample.json',
    'sample.pdf',
    'sample.txt',
    'some-file.txt',
    'testUpload.json',
    'textfile.txt'
];
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('a[href="/download"]').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/download');
    await expect(page.getByText('File Downloader')).toBeVisible();
    
    for(const file of expectedFiles){
      const downloadPromise = page.waitForEvent('download');

      await page.getByRole('link', { name: file, exact: true }).click();

      const download = await downloadPromise;

      expect(download.suggestedFilename()).toBe(file);
    }
})
