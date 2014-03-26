<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */

/**
 * Implements hook_css_alter().
 */
function dc_finland_css_alter(&$css) {
  
  // Disable flexslider css
  unset($css[libraries_get_path('flexslider') . '/flexslider.css']);

}

/**
 * Implements hook_preprocess_node().
 */
function dc_finland_preprocess_node(&$vars) {
  
  $node = $vars['node'];
  $node_wrapper = entity_metadata_wrapper('node', $node);
  
  if ($node->type == 'session') {
    $track = $node_wrapper->field_track->value();
    $track_css = drupal_html_class($track);
  
    $vars['attributes_array']['class'][] = $track_css;
  }
  
}

