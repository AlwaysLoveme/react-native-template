package com.rntstemplate;

import com.facebook.react.ReactActivity;
import android.os.Bundle; // <- add this necessary import
import com.zoontek.rnbootsplash.RNBootSplash; // <- add this necessary import
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "RNTSTemplate";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    RNBootSplash.init(R.drawable.bootsplash, MainActivity.this); // <- display the generated bootsplash.xml drawable over our MainActivity
  }
}
