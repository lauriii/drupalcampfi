<article <?php print $attributes; ?>>
  <div class="inner">

    <header>
      <a href="<?php print $node_url ?>" title="<?php print $title ?>"><?php print $title ?></a>
    </header>
    
    <div <?php print $content_attributes; ?>>
      <?php
        // We hide the comments and links now so that we can render them later.
        hide($content['comments']);
        hide($content['links']);
        print render($content);
      ?>
    </div>
    
  </div>
</article>
